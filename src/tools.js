class Tools{

    constructor(fs, logName, page) {
        this.fs = fs;
        this.logName = logName;

        if(typeof(page) != "undefined"){
            this.page = `<!DOCTYPE html>
                        <body>
                            <h1 class="heading">Hello World</h1>
                        </body>`;
        }

    }

    getPage (){ return this.page;}
    setPage(val){ this.page = val}

    clearsContains() {
        //Delete the contains of the log file
        this.fs.writeFileSync(this.logName, '');
    };

    log( suiteName, caseName, message ){
        let d = new Date();

        try {
            this.fs.appendFileSync(this.logName, suiteName + " : "+ caseName + " : " + d.toLocaleString() + " : " + message + '\n' );
            // file written successfully
        } catch (err) {
            console.error(err);
        }

    };

    read(filePath){
        try {
            const data = this.fs.readFileSync(filePath, 'utf8');

            console.log(data);
            this.page = data;
            return data;
        } catch (err) {
            console.error(err);
            return err;
        }
    };

}



module.exports = Tools;



