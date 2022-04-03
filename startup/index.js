module.exports = function (app)  {
    require('./config')(app);
    require('./cors')(app);
    require('./routes')(app);
    require('./logger')(app);
    require('./parser')(app);
}