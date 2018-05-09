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
                viewHolder.bind("설정",R.drawable.ic_add_24dp)
            }
            1 -> {
                viewHolder as MainBottomSwitchViewHolder
                viewHolder.bind("설정",R.drawable.ic_add_24dp)

            }
            2 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("설정",R.drawable.ic_add_24dp)
            }
            3 -> {
                viewHolder as MainBottomSwitchViewHolder
                viewHolder.bind("설정",R.drawable.ic_add_24dp)
            }
            4 -> {
                viewHolder as MainBottomViewHolder
                viewHolder.bind("설정",R.drawable.ic_add_24dp)
            }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup?, viewType: Int): RecyclerView.ViewHolder {
        inflater = LayoutInflater.from(parent!!.context)
        context = parent.context


        //var view=null
        return when(viewType){
            1,3->{
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
        return 5
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
            ib_bottom_sheet_item_icon.setImageResource(image)
            tv_bottom_sheet_item_title.text=title
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