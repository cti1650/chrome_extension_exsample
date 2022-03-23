# chrome_extension_exsample

## はじめに

Chrome拡張機能の学習用に1つの題材を複数の実装方法で検証できるようにこのリポジトリを作成しました！

## Chrome拡張機能 サンプル

### 要件

- 類似するnpmパッケージを検索するための拡張機能
    
    #### 簡単な仕様
    
    - npmパッケージ名をURLから取得しOpenbaseで検索
        
        ```jsx
        https://www.npmjs.com/package/react-pdf
        https://www.npmjs.com/package/{パッケージ名}
        ```
        
    - githubリポジトリの名称をURLから取得しOpenbaseで検索
        
        ```jsx
        https://github.com/wojtekmaj/react-pdf/releases
        https://github.com/wojtekmaj/{パッケージ名}/releases
        ```
        
    - Openbaseを開く（新規タブ・ポップアップ）
        
        ```jsx
        https://openbase.com/search?q=%E6%A4%9C%E7%B4%A2
        https://openbase.com/search?q={パッケージ名}
        ```
        
    
    #### 実行方法を決める
    
    - コンテキストメニュー（右クリック）から実行
    - アクションボタンから実行
    - GitHub, npmのページにボタンを埋め込む
    - アクションページに検索結果のiframeを表示

### 作成したサンプル

#### コンテキストメニューから実行 ( Context Menu )

- https://github.com/cti1650/chrome_extension_exsample/tree/main/examples/contextmenu

#### アクションボタンから実行 ( Action Button )

- https://github.com/cti1650/chrome_extension_exsample/tree/main/examples/actionbutton

#### GitHub, npmのページにボタンを埋め込む ( Content Script )

- https://github.com/cti1650/chrome_extension_exsample/tree/main/examples/contentscript

#### アクションページに検索結果のiframeを表示 ( Action Page )

- https://github.com/cti1650/chrome_extension_exsample/tree/main/examples/actionpage

#### アクションページにOpenbase検索窓を表示 ( Action Page + Next.js + Tailwind.css + Mantine )

- https://github.com/cti1650/chrome_extension_exsample/tree/main/examples/next

    - 初期設定

    ```
    cd examples/next
    yarn
    ```

    - ページ動作検証

    ```
    yarn dev
    ```

    - 拡張機能に反映

    ```
    yarn export
    ```

