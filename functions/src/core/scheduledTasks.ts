import * as cron from "node-cron";

class ScheduledTasks {
    initCron(){
        //ss   mm   hh   dd   MM   dayofweek
        //0-59 0-59 0-23 1-31 1-12 1-7
        cron.schedule("0 */30 * * * *", ()=>{
            console.log("Hola mundo ");
        });
    }
}

export {ScheduledTasks}