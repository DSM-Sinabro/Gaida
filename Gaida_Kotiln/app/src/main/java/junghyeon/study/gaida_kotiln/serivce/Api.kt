package junghyeon.study.gaida_kotiln.serivce

import junghyeon.study.gaida_kotiln.model.AuthModel
import retrofit2.Call
import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.POST

/**
 * Created by 윤정현 on 2018-04-17.
 */
interface Api {
    //로그인
    @POST("auth")
    @FormUrlEncoded
    fun signIn(@Field("id") id: String, @Field("pw") pw: String): Call<AuthModel>

}