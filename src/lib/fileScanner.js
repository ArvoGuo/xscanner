// /root/.ssh/authorized_keys //如需登录到远程主机，需要到.ssh目录下，新建authorized_keys文件，并将id_rsa.pub内容复制进去
// /root/.ssh/id_rsa //ssh私钥,ssh公钥是id_rsa.pub
// /root/.ssh/id_ras.keystore //记录每个访问计算机用户的公钥
// /root/.ssh/known_hosts
// //ssh会把每个访问过计算机的公钥(public key)都记录在~/.ssh/known_hosts。当下次访问相同计算机时，OpenSSH会核对公钥。如果公钥不同，OpenSSH会发出警告， 避免你受到DNS Hijack之类的攻击。
// /etc/passwd // 账户信息
// /etc/shadow // 账户密码文件
// /etc/my.cnf //mysql 配置文件
// /etc/httpd/conf/httpd.conf // Apache配置文件
// /root/.bash_history //用户历史命令记录文件
// /root/.mysql_history //mysql历史命令记录文件
// /proc/self/fd/fd[0-9]*(文件标识符)
// /proc/mounts //记录系统挂载设备
// /porc/config.gz //内核配置文件
// /var/lib/mlocate/mlocate.db //全文件路径


// self = 进程ID
// /prod/self/stat
// /porc/self/cmdline //当前进程的cmdline参数

// /proc/self/environ //当前进程的环境变量列表
// /prod/self/cwd/app.py 
// /prod/net/arp
// /etc/hosts