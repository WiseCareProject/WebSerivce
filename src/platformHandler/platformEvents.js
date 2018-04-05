/**
 * Created by Or Adar on 4/4/2018.
 */


module.exports = (socket)=>{
    socket.on('userSettingsAck',(data)=>{
        console.log(data);
    });
    socket.on('disconnect', (reason) => {
        console.log('platform has disconnected');
    });

    socket.on('feeding',(status)=>{
        console.log(status);
    })
};