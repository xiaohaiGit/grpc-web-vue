



# 操作指南

## 工具准备
从github 上下载下来的 protoc-gen-grpc-web 的相关文件必须重命名为 protoc-gen-grpc-web 这个文件名。并且必须加入到path 目录下。

## 编译

```shell
# 事先必须存在 src/grpc 目录才行，不然编译报错
protoc -I=proto/ proto/*.proto --js_out=import_style=commonjs:src/grpc/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src/grpc/
```

## 项目结构说明
src/grpc 目录下的文件是protoc 工具生成的，该示例可以正常运行。可以删除后重新生成

## grpc-web
项目地址：
```shell
https://github.com/grpc/grpc-web
```
> 根据官方的文档，是可以成功的。
> 但是有特别注意的地方：
> 在官方文档中，并没有给出一些项目依赖，这些依赖可以在官方项目的example 中的 package.json 文件中查看到。
> example 地址：https://github.com/grpc/grpc-web/blob/master/net/grpc/gateway/examples/echo/commonjs-example/package.json
> 
> 一定要引入："google-protobuf": "~3.21.4" 和 "grpc-web": "~1.5.0"，因为生成js代码中，使用到这些库
> 

## envoy
使用的 envoy 镜像是：bitnami/envoy:latest