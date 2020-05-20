const CatModel = require('../../models/cat')

const addInterest = async (catId, interestId) => {
    try{
        const cat = await CatModel.findOne({ '_id': catId })
        cat.interests.push(interestId)
        cat.save()
        return { status:1, cat }
    }catch(err){
        return{ status: 2, msg: 'Insterest not found'}
    }
}

module.exports = addInterest 