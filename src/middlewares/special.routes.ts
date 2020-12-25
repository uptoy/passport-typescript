import {Router} from 'express'
const router = Router()

import passport from 'passport'

                      //使いたい認証ストラテジーを指定して呼び出すことで認証をリクエストできる
router.get('/special',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.send('success')
})

export default router
