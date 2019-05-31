package cn.qjm253.xueban_h5.extensions

import android.annotation.SuppressLint
import android.graphics.Bitmap
import android.media.MediaMetadataRetriever
import android.support.annotation.DrawableRes
import android.widget.ImageView
import cn.qjm253.xueban_h5.GlideApp
import com.bumptech.glide.load.resource.bitmap.VideoDecoder.FRAME_OPTION
import com.bumptech.glide.request.RequestOptions
import com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool
import com.bumptech.glide.load.resource.bitmap.BitmapTransformation
import java.security.MessageDigest


fun ImageView.loadCircle(url: String) {
    GlideApp.with(this)
            .load(url)
            .circleCrop()
            .into(this)
}

fun ImageView.loadCircle(@DrawableRes res: Int) {
    GlideApp.with(this)
            .load(res)
            .circleCrop()
            .into(this)
}

@SuppressLint("CheckResult")
fun ImageView.loadVideoFrame(url: String, frameTimeMicros: Long) {
    val requestOptions = RequestOptions.frameOf(frameTimeMicros)
    requestOptions.set(FRAME_OPTION, MediaMetadataRetriever.OPTION_CLOSEST);
    requestOptions.transform(object : BitmapTransformation() {
        override fun transform(pool: BitmapPool, toTransform: Bitmap, outWidth: Int, outHeight: Int): Bitmap {
            return toTransform
        }

        override fun updateDiskCacheKey(messageDigest: MessageDigest) {
            try {
                messageDigest.update((context.packageName + "RotateTransform").toByteArray(charset("utf-8")))
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }

    })
    GlideApp.with(this)
        .load(url)
        .apply(requestOptions)
        .into(this)
}