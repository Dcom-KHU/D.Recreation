exports.RollDice=(req,res)=>{
    const diceNum=req.body.diceNum

    //주사위 개수 검사
    const DataCheck=()=>{
        return new Promise((resolve,reject)=>{
            if(diceNum!=1 && diceNum!=2){
                return reject({
                    code:'wrong_dice_num',
                    message:'Dice num is wrong'
                })
            }
            else resolve()
        })
    }

    //1~6까지의 난수 생성
    const GetNum=()=>{
        if(diceNum==1){
            let num1=Math.floor(Math.random()*6)+1
            return {num1:num1}
        }
        else{
            let num1=Math.floor(Math.random()*6)+1
            let num2=Math.floor(Math.random()*6)+1
            if(num1===num2){
                return {num1:num1,num2:num2,isDouble:true}
            }
            else{
                return {num1:num1,num2:num2,isDouble:false}
            }
        }
    }

    DataCheck()
        .then(GetNum)
        .then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=>{
            res.status(500).json(err | err.message)
        })
}