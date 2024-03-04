# Airbnb Clone Backend

## 项目概述

Airbnb Clone Backend 提供了一套完整的后端服务，专为 [react-airbnb-clone](https://github.com/Cicici-Shi/react-airbnb-clone) 前端项目设计。本服务通过 Nest.js 构建，提供了一系列 RESTful API，用以支持前端展示的各种数据需求。

## 主要特性

- **RESTful API**: 提供了一系列的API接口，包括:
  - `/home/discount`: 获取折扣房源信息
  - `/home/hotrecommenddest`: 获取热门推荐目的地
  - `/home/highscore`: 获取高分评价房源
  - `/home/goodprice`: 获取性价比高的房源
  - `/home/plus`: 获取 Airbnb Plus 房源
  - `/home/longfor`: 获取用户长期向往的房源
- **数据持久化**: 使用 MySQL 数据库存储数据，确保数据的安全和可靠。
- **性能优化**: 通过 Redis 缓存常见查询，提高应用响应速度。

## 技术栈

- Nest.js
- TypeORM
- MySQL
- Swagger for API documentation

## 安装指南

```bash
$ npm install
```

## 运行应用

```bash
$ npm run start
```

## API 文档 (Swagger)

本项目集成了 Swagger，提供了一个交互式的 API 文档。您可以通过访问 `/api-doc` 路径来查看所有可用的 API 端点和相关说明。

## 相关链接

- **前端项目**: [react-airbnb-clone](https://github.com/Cicici-Shi/react-airbnb-clone)
- **后端项目**: [airbnb_clone_backend](https://github.com/Cicici-Shi/airbnb_clone_backend)

## 支持与贡献

欢迎通过 Issues 或 Pull Requests 提出问题和贡献代码。我们非常感谢任何形式的贡献，帮助我们共同改进项目。

## 许可证

本项目采用 [UNLICENSED](LICENSE) 许可证。
