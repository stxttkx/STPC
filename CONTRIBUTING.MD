# 贡献指南

欢迎贡献！

- 贡献代码时请遵循以下步骤：

    * 如果您不使用Visual Studio Code

    1. 在平台上 Fork 本仓库。
    2. 将 Fork 下来的仓库 Clone 到本地 (`git clone https://gitee.com/your-username/STPC.git`，将其中的`your-username`更改为你的Gitee用户名)。
    3. 创建新分支 (`git checkout -b feature/new-feature`，将其中的`feature/new-feature`更改为你的新分支名称.注意不要和现有任意分支名称冲突)。
    4. 提交更改 (`git commit -m 'Add new feature'`，将其中的`Add new feature`更改为你的提交信息) 。
    5. Push 到分支 (`git push origin feature/new-feature`，将其中的`feature/new-feature`更改为你的新分支名称)。
    6. 在平台上提交Pull Request。

    * 如果您使用Visual Studio Code

        + 最开始时无需Fork本仓库，直接Clone官方仓库即可。
        + 在Visual Studio Code中打开本地仓库，按下`Ctrl+Shift+P`，输入`Git: Create Branch`，创建新分支。
        + 在Visual Studio Code中进行代码更改，保存后在左侧的源代码管理栏中输入提交信息，点击对勾图标提交更改。
        + 点击`...`，选择`Push to`，将更改Push到新分支。
        > 如果你未登录，这个时候，Visual Studio Code会要求你登录。登录你的Gitee账号即可。
        > 登录后，Visual Studio Code会要求你Fork本仓库。点击“同意”即可将更改Push到你的Fork仓库中。
        + 在平台上提交Pull Request。

**注意：** 不要忘记**说明**一下你的Pull Request！[说明文档模板在这里。](./.gitee/PULL_REQUEST_TEMPLATE.zh-CN.md)