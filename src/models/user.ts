import {model ,Schema ,Document} from 'mongoose'
import bcrypt from 'bcrypt'

export interface IUser extends Document {
    email:string
    password:string
    comparePassword:(password:string) => Promise<boolean>
    //userが入力した値とデータベースにある値を比較する
}

const userSchema = new Schema ({
    email:{
        email: String,
        unique:true,//重複無し確認
        required:true, //必須パラメータ無いとエラーを吐き出す
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
})
//pre:data保存前にoptionを追加する
//optionにはrunValidatorなどがある
userSchema.pre<IUser>('save',async function(next){
    const user = this
    if(!user.isModified('password'))return next()
    //isModifiedおぶじぇくとふぁ修正されたならtrue,それ以外はfalseを返す

    //passwordをhash化する
    const salt = await bcrypt.genSalt(10)//10はlog_rounds
    const hash = await bcrypt.hash(user.password, salt)//passwordをhash化
    user.password = hash//ハッシュ化
    next()
})


//userが入力した値とデータベースにある値を比較する
userSchema.methods.comparePassword = async function ( password:string):Promise<boolean>{
    return await bcrypt.compare(password,this.password)
}
export default model<IUser>('User',userSchema)