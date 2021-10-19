```
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo # 阿里云镜像
```

安装docker

```
sudo yum install docker-ce docker-ce-cli containerd.io
```

docker-ce 社区版本



更新软件包索引

```bash
yum makecache fast
```

启动docker

```
sudo systemctl start docker
```

测试

```bash
docker version # 查看是否安装成功
```

查看hello-world 镜像

```bash
docker images
```

```md
REPOSITORY    TAG       IMAGE ID       CREATED       SIZE
hello-world   latest    feb5d9fea6a5   3 weeks ago   13.3kB
```

卸载docker

```
 sudo yum remove docker-ce docker-ce-cli containerd.io
 
 
 sudo rm -rf /var/lib/docker   # docker 的默认工作路径
 sudo rm -rf /var/lib/containerd
```

阿里云镜像加速



配置使用

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://occanoto.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```



回顾hello- world 执行流程

- 会在本机寻找镜像

  去dockerHub 下载





## docker 常用命令

### 帮助命令

```bash
docker version 
docker info 

docker --help
```

### 镜像命令解释

```md
REPOSITORY    TAG       IMAGE ID       CREATED       SIZE
hello-world   latest    feb5d9fea6a5   3 weeks ago   13.3kB

REPOSITORY	# 镜像的仓库源
TAG	 	 				标签
IMAGE ID 			镜像id
CREATED				创建时间
SIZE					大小


-a 显示所有的信息
-q 只显示镜像id


```

#### 搜索命令

```bash
docker search mysql

可选项
docker search --help

docker search mysql --filter=STARS=5000
```

#### 下载镜像

```bash
docker pull

docker pull mysql 下载mysql 镜像 不写tag 默认就是latest
Using default tag: latest
latest: Pulling from library/mysql
b380bbd43752: Pull complete  # 分层下载
f23cbf2ecc5d: Pull complete 
30cfc6c29c0a: Pull complete 
b38609286cbe: Pull complete 
8211d9e66cd6: Pull complete 
2313f9eeca4a: Pull complete 
7eb487d00da0: Pull complete 
a5d2b117a938: Pull complete 
1f6cb474cd1c: Pull complete 
896b3fd2ab07: Pull complete 
532e67ebb376: Pull complete 
233c7958b33f: Pull complete 
Digest: sha256:5d52dc010398db422949f079c76e98f6b62230e5b59c0bf7582409d2c85abacb # 签名
Status: Downloaded newer image for mysql:latest
docker.io/library/mysql:latest # 真实地址

docker pull mysql 
docker pull docker.io/library/mysql:latest


# 指定版本下载
docker pull mysql:5.7  
5.7: Pulling from library/mysql
b380bbd43752: Already exists 
f23cbf2ecc5d: Already exists 
30cfc6c29c0a: Already exists 
b38609286cbe: Already exists 
8211d9e66cd6: Already exists 
2313f9eeca4a: Already exists 
7eb487d00da0: Already exists 
bb9cc5c700e7: Pull complete 
88676eb32344: Pull complete 
8fea0b38a348: Pull complete 
3dc585bfc693: Pull complete 
Digest: sha256:b8814059bbd9c80b78fe4b2b0b70cd70fe3772b3c5d8ee1edfa46791db3224f9
Status: Downloaded newer image for mysql:5.7
docker.io/library/mysql:5.7
```

#### 删除镜像

```bash
docker rmi -f 镜像ID
docker rmi -f $(docker images -aq) 删除所有容器
```

### 容器命令解释

有了镜像才有容器， 下载一个centOs镜像学习

```bash
docker pull centOs
```

#### 新建容器并启动

```bash
docker run [可选参数] image

# 参数说明
--name="name" 容器名字 区分名字
-d 						以后台名字命名
-i/-t					使用交互方式运行，进入容器查看内容
-p 						指定容器的端口 -p 8080:8080 主机端口：容器端口
			-p ip:主机端口:容器端口
-P						大p随机指定端口

# 启动并进入容器
[root@izu58hih8ihl4pz /]# docker run -it centos /bin/bash
[root@8630e537042f /]# 

# 查看容器内的centos， 基础版本
[root@8630e537042f /]# ls
bin  etc   lib    lost+found  mnt  proc  run   srv  tmp  var
dev  home  lib64  media       opt  root  sbin  sys  usr


# 列出所有当前运行的命令
docker ps

# 显示最近个数
docker ps -a -n=1

# 列出历史所用运行的命令
[root@izu58hih8ihl4pz /]# docker ps -a
CONTAINER ID   IMAGE          COMMAND       CREATED             STATUS                          PORTS     NAMES
8630e537042f   centos         "/bin/bash"   2 minutes ago       Exited (0) About a minute ago             trusting_poincare
a6dc48d86479   feb5d9fea6a5   "/hello"      35 minutes ago      Exited (0) 35 minutes ago                 beautiful_jackson
02ce67f35b1f   feb5d9fea6a5   "/hello"      About an hour ago   Exited (0) About an hour ago              dazzling_goldberg
[root@izu58hih8ihl4pz /]# 


```

#### 退出容器命令

```bash
exit
```

#### 退出不停止

```bash
ctrl + P + Q
```

#### 删除容器

```bash
docker rm 容器id  # 删除指定容器  不能删除运行的容器，如果要强制删除 rm -rf
docker rm -f $(docker ps -aq) # 参数传递

docker ps -a -q｜xargs docker rm 删除所用的容
```

#### 启动和停止容器的操作

```bash
docker start 容器id
docker restart 重启容器
docker stop 停止当前运行的容器
docker kill 
```

#### 后台启动命令

```bash
docker run -d 镜像名

# 问题 docker ps 发现centos停止了

# 常见问题，docker 容器使用后台命令，必须有一个后台命令。如果发现没有后台命令，则会自动停止
# nginx 容器启动后，发现自己没有提供服务，就会立刻停止，就是没有程序了

```

#### 查看日志命令

```bash
docker logs -f -t -tail 容器，没有日志

#
"while true;do echo yaogengzhu;sleep 2; done"


docker run -d centos /bin/sh -c "while true;do echo yaogengzhu;sleep 1;done"

# -tf  时间戳
# --tail number 条数
docker logs -tf --tail 10 eaa904dcdc2b 显示指定行数的logs
```

#### 容器的进程信息

```bash
# top 命令

[root@izu58hih8ihl4pz ~]# docker top eaa904dcdc2b
UID                 PID                 PPID                C                   STIME               TTY                 TIME                CMD
root                8350                8323                0                   13:11               ?                   00:00:00            /bin/sh -c while true;do echo yaogengzhu;sleep 1;done
root                8855                8350                0                   13:14               ?                   00:00:00            /usr/bin/coreutils --coreutils-prog-shebang=sleep /usr/bin/sleep 1
[root@izu58hih8ihl4pz ~]# 

```

#### 查看镜像源数据

```bash
docker ps inspect --help

[root@izu58hih8ihl4pz ~]# docker  inspect eaa904dcdc2b
[
    {
        "Id": "eaa904dcdc2b3196db7fa1cab639b966fe2f6823249ed066c602fd7c35d2b134",
        "Created": "2021-10-17T05:11:07.974941042Z",
        "Path": "/bin/sh",
        "Args": [
            "-c",
            "while true;do echo yaogengzhu;sleep 1;done"
        ],
        "State": {
            "Status": "running",
            "Running": true,
            "Paused": false,
            "Restarting": false,
            "OOMKilled": false,
            "Dead": false,
            "Pid": 8350,
            "ExitCode": 0,
            "Error": "",
            "StartedAt": "2021-10-17T05:11:08.318652021Z",
            "FinishedAt": "0001-01-01T00:00:00Z"
        },
        "Image": "sha256:5d0da3dc976460b72c77d94c8a1ad043720b0416bfc16c52c45d4847e53fadb6",
        "ResolvConfPath": "/var/lib/docker/containers/eaa904dcdc2b3196db7fa1cab639b966fe2f6823249ed066c602fd7c35d2b134/resolv.conf",
        "HostnamePath": "/var/lib/docker/containers/eaa904dcdc2b3196db7fa1cab639b966fe2f6823249ed066c602fd7c35d2b134/hostname",
        "HostsPath": "/var/lib/docker/containers/eaa904dcdc2b3196db7fa1cab639b966fe2f6823249ed066c602fd7c35d2b134/hosts",
        "LogPath": "/var/lib/docker/containers/eaa904dcdc2b3196db7fa1cab639b966fe2f6823249ed066c602fd7c35d2b134/eaa904dcdc2b3196db7fa1cab639b966fe2f6823249ed066c602fd7c35d2b134-json.log",
        "Name": "/trusting_austin",
        "RestartCount": 0,
        "Driver": "overlay2",
        "Platform": "linux",
        "MountLabel": "",
        "ProcessLabel": "",
        "AppArmorProfile": "",
        "ExecIDs": null,
        "HostConfig": {
            "Binds": null,
            "ContainerIDFile": "",
            "LogConfig": {
                "Type": "json-file",
                "Config": {}
            },
            "NetworkMode": "default",
            "PortBindings": {},
            "RestartPolicy": {
                "Name": "no",
                "MaximumRetryCount": 0
            },
            "AutoRemove": false,
            "VolumeDriver": "",
            "VolumesFrom": null,
            "CapAdd": null,
            "CapDrop": null,
            "CgroupnsMode": "host",
            "Dns": [],
            "DnsOptions": [],
            "DnsSearch": [],
            "ExtraHosts": null,
            "GroupAdd": null,
            "IpcMode": "private",
            "Cgroup": "",
            "Links": null,
            "OomScoreAdj": 0,
            "PidMode": "",
            "Privileged": false,
            "PublishAllPorts": false,
            "ReadonlyRootfs": false,
            "SecurityOpt": null,
            "UTSMode": "",
            "UsernsMode": "",
            "ShmSize": 67108864,
            "Runtime": "runc",
            "ConsoleSize": [
                0,
                0
            ],
            "Isolation": "",
            "CpuShares": 0,
            "Memory": 0,
            "NanoCpus": 0,
            "CgroupParent": "",
            "BlkioWeight": 0,
            "BlkioWeightDevice": [],
            "BlkioDeviceReadBps": null,
            "BlkioDeviceWriteBps": null,
            "BlkioDeviceReadIOps": null,
            "BlkioDeviceWriteIOps": null,
            "CpuPeriod": 0,
            "CpuQuota": 0,
            "CpuRealtimePeriod": 0,
            "CpuRealtimeRuntime": 0,
            "CpusetCpus": "",
            "CpusetMems": "",
            "Devices": [],
            "DeviceCgroupRules": null,
            "DeviceRequests": null,
            "KernelMemory": 0,
            "KernelMemoryTCP": 0,
            "MemoryReservation": 0,
            "MemorySwap": 0,
            "MemorySwappiness": null,
            "OomKillDisable": false,
            "PidsLimit": null,
            "Ulimits": null,
            "CpuCount": 0,
            "CpuPercent": 0,
            "IOMaximumIOps": 0,
            "IOMaximumBandwidth": 0,
            "MaskedPaths": [
                "/proc/asound",
                "/proc/acpi",
                "/proc/kcore",
                "/proc/keys",
                "/proc/latency_stats",
                "/proc/timer_list",
                "/proc/timer_stats",
                "/proc/sched_debug",
                "/proc/scsi",
                "/sys/firmware"
            ],
            "ReadonlyPaths": [
                "/proc/bus",
                "/proc/fs",
                "/proc/irq",
                "/proc/sys",
                "/proc/sysrq-trigger"
            ]
        },
        "GraphDriver": {
            "Data": {
                "LowerDir": "/var/lib/docker/overlay2/c442ad6d844aac03250871602c7b8eb3bdd3c8fc984a019b2ce490469a214f2b-init/diff:/var/lib/docker/overlay2/3954fc85fc04d3418739ef0cf8ebb513891ee67ac8604400866efe916181adab/diff",
                "MergedDir": "/var/lib/docker/overlay2/c442ad6d844aac03250871602c7b8eb3bdd3c8fc984a019b2ce490469a214f2b/merged",
                "UpperDir": "/var/lib/docker/overlay2/c442ad6d844aac03250871602c7b8eb3bdd3c8fc984a019b2ce490469a214f2b/diff",
                "WorkDir": "/var/lib/docker/overlay2/c442ad6d844aac03250871602c7b8eb3bdd3c8fc984a019b2ce490469a214f2b/work"
            },
            "Name": "overlay2"
        },
        "Mounts": [],
        "Config": {
            "Hostname": "eaa904dcdc2b",
            "Domainname": "",
            "User": "",
            "AttachStdin": false,
            "AttachStdout": false,
            "AttachStderr": false,
            "Tty": false,
            "OpenStdin": false,
            "StdinOnce": false,
            "Env": [
                "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
            ],
            "Cmd": [
                "/bin/sh",
                "-c",
                "while true;do echo yaogengzhu;sleep 1;done"
            ],
            "Image": "centos",
            "Volumes": null,
            "WorkingDir": "",
            "Entrypoint": null,
            "OnBuild": null,
            "Labels": {
                "org.label-schema.build-date": "20210915",
                "org.label-schema.license": "GPLv2",
                "org.label-schema.name": "CentOS Base Image",
                "org.label-schema.schema-version": "1.0",
                "org.label-schema.vendor": "CentOS"
            }
        },
        "NetworkSettings": {
            "Bridge": "",
            "SandboxID": "3be10c109d63d7e70b69f5919d82a2a87bed078cd6f5d405cef2ca0d58916ae9",
            "HairpinMode": false,
            "LinkLocalIPv6Address": "",
            "LinkLocalIPv6PrefixLen": 0,
            "Ports": {},
            "SandboxKey": "/var/run/docker/netns/3be10c109d63",
            "SecondaryIPAddresses": null,
            "SecondaryIPv6Addresses": null,
            "EndpointID": "1fe7ac2430002fc1bc43b2565fa9e0ae5295a5092eed22447e97025ae65cab3e",
            "Gateway": "172.18.0.1",
            "GlobalIPv6Address": "",
            "GlobalIPv6PrefixLen": 0,
            "IPAddress": "172.18.0.2",
            "IPPrefixLen": 16,
            "IPv6Gateway": "",
            "MacAddress": "02:42:ac:12:00:02",
            "Networks": {
                "bridge": {
                    "IPAMConfig": null,
                    "Links": null,
                    "Aliases": null,
                    "NetworkID": "a431fed268bfe28d1c10725f9c37f54a52ca83556d32794fab6dc3c6a40a9f50",
                    "EndpointID": "1fe7ac2430002fc1bc43b2565fa9e0ae5295a5092eed22447e97025ae65cab3e",
                    "Gateway": "172.18.0.1",
                    "IPAddress": "172.18.0.2",
                    "IPPrefixLen": 16,
                    "IPv6Gateway": "",
                    "GlobalIPv6Address": "",
                    "GlobalIPv6PrefixLen": 0,
                    "MacAddress": "02:42:ac:12:00:02",
                    "DriverOpts": null
                }
            }
        }
    }
]
```

#### 进入当前正在进行的容器

```bash
# 容器通常都是后台方式运行的

# 命令
docker exec -it 容器 id bash shell

# 测试
[root@izu58hih8ihl4pz ~]# docker exec -it eaa904dcdc2b /bin/bash
[root@eaa904dcdc2b /]# ls
bin  dev  etc  home  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
[root@eaa904dcdc2b /]# 

# 方式2 正在执行的代码
docker attach 容器ID

# 区别
# docker exec  进入一个新的终端
# docker attach 进入当前的运行的终端
```

#### 从容器拷贝文件

```bash
docker cp 05bae52d9f41:/home/yaogengzhu.js /home
```





### 测试

```bash
docker run -d --name nginx-5 -p 3389:80 nginx
# -p 暴露端口 防火墙端口:容器端口
# 容器端口
curl localhost:3389  查看链接


[root@izu58hih8ihl4pz ~]# docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                  NAMES
1fd0946e672b   nginx     "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:3389->80/tcp   nginx-5
# 进入容器
[root@izu58hih8ihl4pz ~]# docker exec -it nginx-5 /bin/bash
root@1fd0946e672b:/# ls
bin   dev                  docker-entrypoint.sh  home  lib64  mnt  proc  run   srv  tmp  var
boot  docker-entrypoint.d  etc                   lib   media  opt  root  sbin  sys  usr
root@1fd0946e672b:/# 

# 停止服务
[root@izu58hih8ihl4pz ~]# docker ps
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS         PORTS                  NAMES
1fd0946e672b   nginx     "/docker-entrypoint.…"   7 minutes ago   Up 7 minutes   0.0.0.0:3389->80/tcp   nginx-5
[root@izu58hih8ihl4pz ~]# docker stop 1fd0946e672b
1fd0946e672b
[root@izu58hih8ihl4pz ~]# 

# 思考问题：每次改动nginx配置文件需要进入容器，比较麻烦。需要提供映射，容器自动修改，就非常简单。
```



### 安装一个tomcat

```bash
docker run -it --rm tomcat:9.0 # 用完即删

docker pull tomcat:9.0

# 启动运行
docker run -d -p:3344:8080 --name tomact03 tomcat

# 进入容器
[root@izu58hih8ihl4pz ~]# docker exec -it tomact03  /bin/bash
root@fb27fbd8a093:/usr/local/tomcat# ls

# linux 命令少了， 2 没有webapps , 阿里云镜像原因默认是最小镜像，把不必要的都剔除掉。保证最小可运行环境


```



### 安装elasticsearch

```bash
# 下载启动elasticsearch
docker run -d --name elasticsearch --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.6.2


# 卡死
# 修改配置文件
docker run -d --name elasticsearch --net somenetwork -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx512m" elasticsearch:7.6.2

```

#### 查看cpu状态

```bash
docker stats

CONTAINER ID   NAME            CPU %     MEM USAGE / LIMIT     MEM %     NET I/O   BLOCK I/O       PIDS
582af4449380   elasticsearch   95.96%    379.1MiB / 1.796GiB   20.61%    0B / 0B   130MB / 344kB   40

[root@izu58hih8ihl4pz ~]# curl localhost:9200
{
  "name" : "582af4449380",
  "cluster_name" : "docker-cluster",
  "cluster_uuid" : "jI7646dxSkylt7iShAbyJw",
  "version" : {
    "number" : "7.6.2",
    "build_flavor" : "default",
    "build_type" : "docker",
    "build_hash" : "ef48eb35cf30adf4db14086e8aabd07ef6fb113f",
    "build_date" : "2020-03-26T06:34:37.794943Z",
    "build_snapshot" : false,
    "lucene_version" : "8.4.0",
    "minimum_wire_compatibility_version" : "6.8.0",
    "minimum_index_compatibility_version" : "6.0.0-beta1"
  },
  "tagline" : "You Know, for Search"
}
[root@izu58hih8ihl4pz ~]# 


```

### 可视化

portioner

``` bash
docker run -d -p 8088:9000 \
--restart=always -v /var/run/docker.sock:/var/run/docker.sock --privileged=true portainer/portainer
```

访问测试

### commit 镜像

保存当前容器的状态，可以通过提交一个commit 提交 获得一个新的镜像

```bash
# 创建一个新的镜像
[root@izu58hih8ihl4pz ~]# docker commit -a='yaogengzhu' -m='add webapps app' 12b756220c4d tomact03:1.0
sha256:9f308d3877e5a92270c0486ab9334525ae9de7f2a41fec06ac0ad8361a8f40d8
[root@izu58hih8ihl4pz ~]# 
```



### 容器数据卷

容器数据共享，docker 产生的数据可以同步到本地。 

容器持久化和同步操作，容器间可以数据共享

#### 使用数据卷

```bash
# 使用命令挂载 - v
docker run -it -v 主机目录：容器目录 -p 主机端口:容器端口


[root@izu58hih8ihl4pz home]# docker run -d -it -v /home/ceshi:/home centos /bin/bash
e7b1b8a50229e00342e16d6ccafdaa3d4d5acb2b12da3cea19c8f21c36639cf8

docker inspect 容器ID 查看挂载
```

**优点：本地修改即可，容器会自动同步**



### 测试mysql

```bash
docker pull mysql:5.7
```

需要先设置密码

```bash
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

运行时挂载

```bash
# -d 后台运行
# -p 端口映射
# -v 卷挂载
# -e 环境配置
# 
docker run -d -p 3310:3306 -v /home/mysql/conf:/etc/mysql/conf.d -v /home/mysql/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456 --name mysql01 mysql:5.7
```

启动成功后，可以本地测试访问

- 主机端口和服务端口3306建立连接
- 本地测试创建的数据，主机本地的文件会自动更新

容器删除，挂载到本地的数据卷依然不会丢失。



#### 具名和匿名挂载

```bash
# 匿名挂载
# -v 容器路径

docker -d -p --name nginx01  -v /etc/nginx nginx  # 匿名挂载
docker -d -P --name nginx02 -v juming:/etc/nginx	# 具名挂载

# 通过-v 卷名:容器内路径

```

##### 查看卷所有的情况

```bash
# 
[root@izu58hih8ihl4pz data]# docker volume ls
DRIVER    VOLUME NAME
local     5c5deb937d05a7a8af7ab311e690b0b968a50b9d1d5b26b9590c19cadeca4029
local     378e9faa3bea9bc76dd8af31e9cc664165945dfdafb198afc71765a54b44ea39
local     e11abf52d708b0d4b72eff9f456adc07f5e4259432c9988b87b35f536672f0dc
[root@izu58hih8ihl4pz data]# 

# VOLUME NAME 一串码是匿名挂载

# 查看卷
docker volume inspect 378e9faa3bea9bc76dd8af31e9cc664165945dfdafb198afc71765a54b44ea39


[root@izu58hih8ihl4pz data]# docker volume inspect 378e9faa3bea9bc76dd8af31e9cc664165945dfdafb198afc71765a54b44ea39
[
    {
        "CreatedAt": "2021-10-17T16:45:27+08:00",
        "Driver": "local",
        "Labels": null,
        "Mountpoint": "/var/lib/docker/volumes/378e9faa3bea9bc76dd8af31e9cc664165945dfdafb198afc71765a54b44ea39/_data",
        "Name": "378e9faa3bea9bc76dd8af31e9cc664165945dfdafb198afc71765a54b44ea39",
        "Options": null,
        "Scope": "local"
    }
]
```

#### 如何区分具名和匿名挂载

```bash
# -v 容器路径
# -v 卷名:容器路径	# 具名
# -v /主机路径:容器路径
```



```bash
# 通过ro rw 来控制权限
# ro -readonly    只能通过宿主机来改变，容器无法修改
# rw -readwrite 

# 一旦设置容器权限，容器对我们挂载的内容就有了限定
docker run -d -P --name nginx04 -v juming:/etc/mysql:ro nginx
```



###  初识Dockerfile

```bash
FROM centos
VOLUME ['volume1', 'volume2']

CMD echo '----end----'
CMD /bin/bash

# build
docker build -f dockerfile -t /yaogengzhu/centos .

```

#### Dockerfile指令

```bash
# 指令
FROM	     # 基础镜像
MAINTAINER # 镜像维护者
RUN				 # docker 镜像构建时候需要运行的命令
ADD				 # 添加内容
WORKDIR		 # 镜像的工作目录
VOLUME		 # 挂载卷
EXPOSE		 # 暴露端口配置
CMD 			 # 指定容器需要运行的命令, 只有最后一个会生效，可被替代
ENTRYPOINT # 指定这个容器启动后需要运行的命令，可追加命令
ONBUILD		 # 当构建一个被继承，这个时候就会运行： ONBUILD 的指令，触发指令
COPY			 # 将文件拷贝到镜像中
ENV				 # 构建到时候设置环境变量
```



### -

基础镜像scratch， 然后配置基础的软件和配置

```bash
# 创建一个自己的centos

FROM centos
MAINTAINER yaogengzhu<455947455@qq.com>

ENV MYPATH /user/local
WORKDIR $MYPATH

RUN yum -y install vim
RUN yum -y install net-tools
EXPOSE 80

CMD echo $MYPATH
CMD echo "---构建完成--"
CMD /bin/bash

# 通过文件构建镜像
docker build -f mydockerfile -t mycentos:0.1 .

# c测试运行
docker run -it mycentos:0.1
# 对比镜像多了很多命令

```

可以列出变更历史

```bash
docker history 镜像id
```


