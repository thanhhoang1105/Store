class Features {
    constructor(query, queryStr) {
        this.query = query
        this.queryStr = queryStr
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                  name: {
                      $regex: this.queryStr.keyword,
                      $options: 'i'
                  }
              }
            : {}
        this.query = this.query.find({ ...keyword })
        return this
    }

    filter() {
        const queryObj = { ...this.queryStr }
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach(el => delete queryObj[el])

        //1B) Advanced filtering
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(
            /\b(gte|gt|lte|lt)\b/g,
            match => `$${match}`
        )
        this.query = this.query.find(JSON.parse(queryStr))

        return this
    }

    // filter() {
    //     const queryCopy = { ...this.queryStr }

    //     // Removing some field for category
    //     const removeFields = ['keyword', 'page', 'limit']

    //     removeFields.forEach(key => delete queryCopy[key])

    //     this.query = this.query.find(queryCopy)
    //     return this
    // }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1
        const skip = resultPerPage * (currentPage - 1)

        this.query = this.query.limit(resultPerPage).skip(skip)

        return this
    }
}

module.exports = Features
