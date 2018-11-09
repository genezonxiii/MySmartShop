package tw.org.cdri.mysmartshop;

import android.app.Application;

import com.facebook.react.ReactApplication;

import tw.org.cdri.mysmartshop.BuildConfig;
import com.wenkesj.voice.VoicePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.brentvatne.react.ReactVideoPackage;
import org.reactnative.camera.RNCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import org.pgsqlite.SQLitePluginPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new SQLitePluginPackage(), // register SQLite Plugin here
          new RNCameraPackage(),
          new VectorIconsPackage(),
          new ReactVideoPackage(),
          new LinearGradientPackage(),
          new VoicePackage(),
          new MainReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
