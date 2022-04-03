const { config } = require('dotenv')

module.exports = function () {
    try {
        config();
    } catch (error){
        throw new Error('FATAL Error : dotenv file not found')
    }
}