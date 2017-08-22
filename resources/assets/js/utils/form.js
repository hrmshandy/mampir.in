import Errors from './errors.js'

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();

        this.isProcessed = false;
    }


    /**
     * Fetch all relevant data for the form.
     */
    data(method = "post") {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        if(method !== "post") {
            data._method = method;
        }

        return this.objectToFormData(data);
    }

    objectToFormData(obj, form, namespace) {

        var fd = form || new FormData();
        var formKey;

        for(var property in obj) {
            if(obj.hasOwnProperty(property)) {

                if(namespace) {
                    formKey = namespace + '[' + property + ']';
                } else {
                    formKey = property;
                }

                // if the property is an object, but not a File,
                // use recursivity.
                if(typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
                    this.objectToFormData(obj[property], fd, formKey);
                } else {
                    // if it's a string or a File object
                    fd.append(formKey, obj[property]);
                }

            }
        }

        return fd;
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = null;
        }

        this.errors.clear();
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     * @param reset
     */
    submit(requestType, url, reset = true) {
        this.isProcessed = true;
        return new Promise((resolve, reject) => {
            axios.post(url, this.data(requestType))
                .then(response => {
                    this.onSuccess(response.data, reset);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data);
                });
        });
    }


    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data, reset) {
        this.isProcessed = false;
        if(reset) {
            this.reset();
        }
    }


    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.isProcessed = false;
        this.errors.record(errors);
    }
}

export default Form;