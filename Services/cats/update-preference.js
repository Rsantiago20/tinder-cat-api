const CatModel = require('../../models/cat')

const updatePreference = async (catId, preference) => {

    try{
        const update = {$set: {preferences: preference}}
        await CatModel.findByIdAndUpdate(catId, update)
        return{ status: 1, preferences}
    }catch(err){
        return{ status: 2, msg: 'preferences not update'}
    }

}

module.exports = updatePreference