const button = document.querySelector('button');
button.addEventListener('click', function() {
    Notification.requestPermission().then(perm=>{
        if(perm==="granted"){
            const notify=new Notification("Item Added",{
                body:"Congrats!🎉🎉",
                data:{ Say:"yo boy kongming"},
                icon:"logoimg.png",
                tag:"test"
            })
            notify.addEventListener("close",e=>{
                console.log(e)
            })
            let note
            let interval
            document.addEventListener("visibilitychange",()=>{
                if(document.visibilityState==="hidden"){
                    const leaveDate=new Date();
                    interval=setInterval(()=>{
                   note= new Notification("Please Come Back😢😢",{
                        body:`You are  ${Math.round((new Date()-leaveDate)/1000)} seconds late😈`
                    })
                },4000)
                }else{
                    if(interval)clearInterval(interval)
                    if(note)Notification.close()
                }
            })
        }
    })
})