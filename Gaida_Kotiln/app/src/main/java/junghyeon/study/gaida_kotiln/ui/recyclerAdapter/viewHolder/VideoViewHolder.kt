package junghyeon.study.gaida_kotiln.ui.recyclerAdapter.viewHolder

import android.support.v7.widget.RecyclerView
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import com.volokh.danylo.video_player_manager.ui.VideoPlayerView
import junghyeon.study.gaida_kotiln.R


class VideoViewHolder(v : View) : RecyclerView.ViewHolder(v) {

    lateinit var view : View

    init {
        view = v
    }

    var mPlayer = view.findViewById(R.id.tv_main_list_item_id) as VideoPlayerView
    var mTitle = view.findViewById(R.id.tv_main_list_item_id) as TextView
    var mCover = view.findViewById(R.id.tv_main_list_item_id) as ImageView
    var mVisibilityPercents = view.findViewById(R.id.tv_main_list_item_id) as TextView

    fun bind() {
        with(view) {

        }
    }


}