package cn.qjm253.xueban_h5.web_bridge

import android.app.Activity
import android.webkit.JavascriptInterface
import cn.qjm253.xueban_h5.activity.qrcode.QrCodeActivity
import cn.qjm253.xueban_h5.extensions.jumpForResult
import cn.qjm253.xueban_h5.extensions.toast
import cn.qjm253.xueban_h5.views.XbWebView
import com.tencent.smtt.sdk.ValueCallback


/**
 * Js调用Android接口
 */
class AndroidToJs(val context: Activity, val webView: XbWebView) {

    companion object {
        // 给webview的window对象注入的调用对象的名字
        const val JS_CALLER_NAME = "JsCallAndroidEr"

        // requestCode
        const val REQUEST_CODE_SCAN: Int = 0



        // callback
        const val CALLBACK_NAME_BASE = "_Xueban_Android_JS_CALLBACK_"
        const val CALLBACK_SCAN_CODE = "${CALLBACK_NAME_BASE}scan_code"
    }

    /**
     * 显示Toast
     */
    @JavascriptInterface
    fun showToast(msg: String, duration: Int = 500) {
        context.toast(msg, duration = duration)
    }

    /**
     * 调用原生的扫码API
     */
    @JavascriptInterface
    fun scanCode() {
        // 跳转到扫码页面开始扫码
        context.jumpForResult(QrCodeActivity::class.java, REQUEST_CODE_SCAN)
    }


    /**
     * 选择图片
     */
    @JavascriptInterface
    fun selectPicture() {

    }



    /**
     * 调用Js的回调函数，并且支持传递一个字符串参数
     */
    fun callJs(callbackName: String, param: String? = "", callback: ValueCallback<String> = ValueCallback {  }) {
        webView.post {
            // 执行JS的代码，需要在主线程中进行
            webView.evaluateJavascript("javascript:$callbackName('$param')", callback)
        }
    }
}