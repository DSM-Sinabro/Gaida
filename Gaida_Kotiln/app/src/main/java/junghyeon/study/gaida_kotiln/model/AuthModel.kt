package junghyeon.study.gaida_kotiln.model

import com.google.gson.annotations.*

/**
 * Created by root1 on 2018. 3. 7..
 */
data class AuthModel(@SerializedName("access_token") val token: String,
                     @SerializedName("refresh_token") val refreshToken: String?)