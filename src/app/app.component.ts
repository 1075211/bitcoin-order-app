import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bitcoin';

  constructor(private router: Router) { }

  buyBtc() {
    console.log('BUY !');
    setTimeout(() => {
      this.router.navigate(['buy-form/Buy']);
    }, 400);
  }

  sellBtc() {
    console.log('SELL !');
    setTimeout(() => {
      this.router.navigate(['sell-form/Sell']);
    }, 400);
  }

  // 👇 新增方法：跳转到历史记录页面
  viewHistory() {
    console.log('View History');
    this.router.navigate(['/history']);
  }

  // 👇 新增方法：打开帮助（这里可以是弹窗或路由）
  showHelp() {
    console.log('Show Help');
    // 你可以替换为实际跳转或弹出组件
    this.router.navigate(['/help']);
  }

  // 👇 新增方法：切换语言（可以根据需要接入 i18n）
  toggleLanguage() {
    console.log('Toggle Language');
    // 模拟语言切换逻辑
    const currentLang = localStorage.getItem('lang') || 'en';
    const nextLang = currentLang === 'en' ? 'zh' : 'en';
    localStorage.setItem('lang', nextLang);
    location.reload(); // 或者调用 i18n 服务切换语言
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bitcoin';

  constructor(private router: Router) { }

  buyBtc() {
    console.log('BUY !');
    setTimeout(() => {
      this.router.navigate(['buy-form/Buy']);
    }, 400);
  }

  sellBtc() {
    console.log('SELL !');
    setTimeout(() => {
      this.router.navigate(['sell-form/Sell']);
    }, 400);
  }
}
