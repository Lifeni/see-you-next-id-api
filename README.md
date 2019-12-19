# 下个 ID 见 - 后端
下个 ID 见！一个论坛项目。

本仓库为后端部分，前端部分 [在这里](https://github.com/Lifeni/see-you-next-id)。

来自 哈尔滨工程大学 第十三届网页制作大赛。

介绍和其余内容见前端部分的 [README.md](https://github.com/Lifeni/see-you-next-id/blob/master/README.md)

## 接口设计

| 接口     | 方法 | 参数                            | 含义                                     |
| -------- | ---- | ------------------------------- | ---------------------------------------- |
| `/id`    | GET  | -                               | 获取一个四位数的 ID                      |
| `/info`  | GET  | -                               | 获取网页节点和 Emoji 信息                |
| `/post`  | GET  | `node`                          | 获取相应节点的帖子信息                   |
| `/reply` | POST | `user` `postId` `content`       | 回贴，参数有用户 ID 和帖子 ID 和回复内容 |
| `/talk`  | POST | `user` `node` `title` `content` | 发言，参数有用户 ID、节点、标题和内容    |

## 开源协议

MIT License
