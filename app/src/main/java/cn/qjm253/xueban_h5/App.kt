package cn.qjm253.xueban_h5

import android.app.Application
import android.util.Log
import com.tencent.smtt.sdk.QbSdk


class App : Application() {
    override fun onCreate() {
        super.onCreate()

        // 初始化X5内核环境
        QbSdk.initX5Environment(this, object: QbSdk.PreInitCallback{
            override fun onCoreInitFinished() {
                println("onCoreInitFinished")
            }

            override fun onViewInitFinished(p0: Boolean) {
                Log.d("app", " onViewInitFinished is $p0")
                println("onViewInitFinished")
            }

        })
    }
}