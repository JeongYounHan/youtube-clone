# youtube-clone
## PostCSS

1. autoprefixer라는 모듈 통해 prefix(-webkit, -ms 따위의 것들) 없어도 자동으로 처리...!

2. 다양한 플러그인 사용 가능

3. 모듈로 css 처리하므로 BEM 따위등 사용하지 않아도 된다, 이름에 .module 붙이고 import 할 때 `import styles from './buttom.css'`  요런식으로 하면 끝

   ```react
   import styles from './buttom.module.css'
   
   class Button1 extends Components {
       render() {
           return (
             <div className={styles.button}>
             </div>
           )
       }
   }
   ```

   



