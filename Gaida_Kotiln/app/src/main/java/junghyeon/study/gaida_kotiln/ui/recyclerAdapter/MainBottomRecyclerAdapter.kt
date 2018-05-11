package junghyeon.study.gaida_kotiln.ui.recyclerAdapter

import android.content.Context
import android.content.Intent
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import junghyeon.study.gaida_kotiln.R
import kotlinx.android.synthetic.main.view_main_bottom_item.view.*
import kotlinx.android.synthetic.main.view_main_bottom_item_swtich.view.*

/**
 * Created by 윤정현 on 2018-05-02.
 */


class MainBottomRecyclerAdapter : RecyclerView.Adapter<RecyclerView.ViewHolder>() {


    var inflater: LayoutInflater? = null
    var context: Context? = null


    override fun onBindViewHolder(holder: RecyclerView.ViewHolder?, position: Int) {

        var viewHolder : RecyclerView.ViewHolder?=holder
        when (position) {
            0 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("영상촬영",R.drawable.ic_videocam_black_24dp)
            }
            1 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("나의앨범",R.drawable.ic_album_24dp)

            }
            2 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("마이페이지",R.drawable.ic_grade_24dp)
            }
            3 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("활동로그",R.drawable.ic_touch_app_24dp)
            }
            4 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("공개범위",R.drawable.ic_lock_24dp)
            }
            5 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("설정",R.drawable.ic_settings_24dp)
            }
            6 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("추가예정",R.drawable.ic_add_24dp)
            }
            7 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("추가예정",R.drawable.ic_add_24dp)
            }
            8 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("추가예정",R.drawable.ic_add_24dp)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup?, viewType: Int): RecyclerView.ViewHolder {
        inflater = LayoutInflater.from(parent!!.context)
        context = parent.context


        //var view=null
        return when(viewType){
            10->{
                val view = inflater!!.inflate(R.layout.view_main_bottom_item_swtich, null)
                MainBottomSwitchViewHolder(view)
            }
            else->{
                val view = inflater!!.inflate(R.layout.view_main_bottom_item, null)
                MainBottomViewHolder(view)
            }
        }
    }

    override fun getItemCount(): Int {
        return 9
    }

    override fun getItemViewType(position: Int): Int = position


}


class MainBottomViewHolder(view : View) : RecyclerView.ViewHolder(view){
    lateinit var rootView: View

    init {
rootView = view
}


fun bind(title: String,image : Int) {
    with(rootView) {
        iv_main_bottom_item_image.setImageResource(image)
        tv_main_bottom_item_text.text=title
    }
}
}

class MainBottomSwitchViewHolder(view : View) : RecyclerView.ViewHolder(view){
    lateinit var rootView: View

    init {
        rootView = view
    }


    fun bind(title: String,image : Int) {
        with(rootView, {
            ib_bottom_sheet_item_icon_switch.setImageResource(image)
            tv_bottom_sheet_item_title_switch.text=title
        })
    }
}