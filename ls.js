 const path = require('path');
 const fs = require('fs');
 const [node, file, ...args] = process.argv;
 const string = args.join(' ');
 const chalk = require('chalk')
 let argv = process.argv.slice(2);
 if (argv[0] == "/Users/nasaa/Desktop" || argv[0] == "/Users/nasaa/Downloads") {
     const directoryPath = argv[0];
     fs.readdir(directoryPath, function(err, files) {
         files.forEach(function(file) {
             console.log(file);
         });
     });
 }
 let os = require('os')
 const [...args1] = process.argv;
 if (argv[0] == '-l') {
     if (argv[1] == "/Users/nasaa/Desktop" || argv[1] == "/Users/nasaa/Downloads") {
         const directoryPath = argv[1];
         fs.readdir(directoryPath, function(err, files) {
             files.forEach(function(file) {
                 statsObj = fs.statSync(directoryPath + '/' + file)
                 statsObjsize = fs.statSync(directoryPath + '/' + file).size
                 statsObjdate = fs.statSync(directoryPath + '/' + file).birthtime
                 statsObjnlink = fs.statSync(directoryPath + '/' + file).nlink;
                 console.log('-rw-r--r--', chalk.white(statsObjnlink), "  ", chalk.yellow(os.userInfo().username), "  ", 'staff',
                     chalk.white(statsObjsize), "  ", chalk.white(String(statsObjdate).slice(0, 16)), "  ", chalk.white(file));
             });
         });
     } else {
         if (argv[1] == undefined) {
             const directoryPath = path.join('');
             fs.readdir(directoryPath, function(err, files) {
                 files.forEach(function(file) {
                     statsObj = fs.statSync(directoryPath + '/' + file)
                     statsObjsize = fs.statSync(directoryPath + '/' + file).size
                     statsObjdate = fs.statSync(directoryPath + '/' + file).birthtime
                     statsObjnlink = fs.statSync(directoryPath + '/' + file).nlink;
                     console.log('-rw-r--r--', chalk.white(statsObjnlink), "  ", chalk.yellow(os.userInfo().username), "  ", 'staff',
                         chalk.white(statsObjsize), "  ", chalk.white(String(statsObjdate).slice(0, 16)), "  ", chalk.white(file));

                 });
             });
         }
     }
 }
 if (argv[0] == undefined) {
     const directoryPath = path.join('');
     fs.readdir(directoryPath, function(err, files) {
         files.forEach(function(file) {
             console.log(file);
         });
     });
 }