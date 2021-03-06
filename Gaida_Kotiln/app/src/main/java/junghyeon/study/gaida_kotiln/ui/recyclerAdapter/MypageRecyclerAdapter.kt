package junghyeon.study.gaida_kotiln.ui.recyclerAdapter

import android.content.Context
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import junghyeon.study.gaida_kotiln.R
import junghyeon.study.gaida_kotiln.model.MyPageModel
import kotlinx.android.synthetic.main.view_main_bottom_item_swtich.view.*


class MypageRecyclerAdapter(confirm : Int) : RecyclerView.Adapter<MypageRecyclerAdapter.MyPageViewHolder>(){

    var inflater: LayoutInflater? = null
    var context: Context? = null
    var postArr = arrayOf<MyPageModel.PostModel>()
    var interestArr = arrayOf<MyPageModel.InterestModel>()
    var mConfirm : Int=0

    init {
        mConfirm=confirm
    }


    override fun onCreateViewHolder(parent: ViewGroup?, viewType: Int): MyPageViewHolder {
        inflater = LayoutInflater.from(parent!!.context)
        context = parent.context
        val viewPost = inflater!!.inflate(R.layout.view_mypage_post, null)

        val viewInterest = inflater!!.inflate(R.layout.view_main_bottom_item_swtich, null)


        return when(mConfirm){
            0->MyPageViewHolder(viewPost)
            1->MyPageViewHolder(viewInterest)
            else->MyPageViewHolder(viewPost)
        }
    }

    override fun getItemCount(): Int {
        return when(mConfirm){
            1->postArr.size
            2->interestArr.size
            else->0
        }
    }

    override fun onBindViewHolder(holder: MyPageViewHolder?, position: Int) {


    }


    inner class MyPageViewHolder(v : View) : RecyclerView.ViewHolder(v){
        lateinit var rootView: View

        init {
            rootView = v
        }


        fun bind(title: String,image : Int) {
            with(rootView){

            }
        }
    }
}