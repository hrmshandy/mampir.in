class Pagination {
    constructor(total = 0, perPage = 10, currentPage = 1) {
        this.records = total;
        this.perPage = perPage;
        this.currentPage = currentPage;
    }

    render() {
        let w = this.get();
        let elements = [
            w.first,
            w.pages instanceof Array ? '...' : null,
            w.pages,
            w.last instanceof Array ? '...' : null,
            w.last
        ]
        return elements;
    }

    get() {
        let chunk = 3;
        if (this.lastPage() < (chunk * 2) + 6) {
            return this.getSmallPages();
        }
        return this.getPages(chunk);
    }

    getSmallPages() {
        return {
            first: this.range(1, this.lastPage()),
            pages: null,
            last: null
        };
    }

    getPages(onEachSide) {
        let w = onEachSide * 2;
        if (!this.hasPages()) {
            return {
                first: null,
                pages: null,
                last: null
            }
        }
        if (this.currentPage <= w) {
            return this.getPagesTooCloseToBeginning(w);
        } else if (this.currentPage > (this.lastPage() - w)) {
            return this.getPagesTooCloseToEnding(w);
        }
        return this.getFullPages(onEachSide);
    }

    getPagesTooCloseToBeginning(w) {
        return {
            first: this.range(1, w + 2),
            pages: null,
            last: this.getFinish()
        };
    }

    getPagesTooCloseToEnding(w) {
        let last = this.range(this.lastPage() - (w + 2), this.lastPage())
        return {
            first: this.getStart(),
            pages: null,
            last: last
        };
    }

    getFullPages(onEachSide) {
        return {
            first: this.getStart(),
            pages: this.getAdjacentRange(onEachSide),
            last: this.getFinish()
        };
    }

    getAdjacentRange(onEachSide) {
        return this.range(this.currentPage - onEachSide, this.currentPage + onEachSide);
    }

    hasPages() {
        return this.lastPage() > 1;
    }

    getStart() {
        return this.range(1, 2);
    }

    getFinish() {
        return this.range(this.lastPage() - 1, this.lastPage());
    }

    lastPage() {
        return Math.ceil(this.records / this.perPage);
    }

    setCurrentPage(page) {
        this.currentPage = page;
    }

    setPerPage(perPage) {
        this.perPage = perPage;
    }

    setRecords(total) {
        this.records = total;
    }

    range(start, end) {
        let range = [];
        for (let i = start; i <= end; i++) {
            range.push(i);
        }
        return range;
    }
}

export default Pagination;