import { Validator, ErrorBag } from 'vee-validate';

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     * @param rules
     */
    constructor(data, rules = {}) {
        this.originalData = data;

        setTimeout(() => {
            for (let field in data) {
                this[field] = data[field];
            }
        });

        this.rules = rules;

        this.validator = new Validator(rules);

        this.errors = this.validator.errors;

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
            this.validateAll(() => {
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
        });
    }

    validateAll(onSuccess = () => {}, onFailed = () => {}, onError = () => {}) {
        this.validator.validateAll(this.originalData).then(result => {
            if (!result) {
                onFailed();
                return;
                // validation failed.
            }
            // success stuff.
            onSuccess(result);
        }).catch(() => {
            onError();
            // something went wrong (non-validation related).
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

    /**
     * validate the filed.
     *
     * @param field
     * @param value
     */
    validate(field, value) {
        this.validator.validate(field, value);
    }
}

export default Form;