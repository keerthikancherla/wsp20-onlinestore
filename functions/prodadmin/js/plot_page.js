//const Plotly = require('plotly')

function getData() {
    return Math.random();

    
}
Plotly.plot('glPageContent',[{
    y:[getData()],
    type:'line'
}]);