const catModel = require('../../models/cat')

const catList = async (catId) => {
    try{
        const catId = await catModel.findById(catIdData)
        console.log('catId: ', catId)
        const response = await catModel.find
        let hoy = new Date();
        console.log('Hoy: ', hoy)
        let dateMin = new Date (hoy.sethMonth(hoy.getMoth() - (CatId.preferences.age_min * 12)));
        console.log('Min: ', dateMin)
        let dateMax = new Date (hoy.sethMonth(hoy.getMoth() - (CatId.preferences.age_max * 12)));
        console.log('Max: ', dateMax)
        const response = await catModel.find({ gender: CatId.preferences.gender,
                                            birthday : { $gte:dateMax, $lte:dateMin}
        })
        return { status: 1, response }
    }catch (err) {
        return { status: 2,msg: 'Error list cats' }
    }
}