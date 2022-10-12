class Tools{

    constructor(fs, logName) {
        this.fs = fs;
        this.logName = logName;
        this.page = `<!DOCTYPE html>
                        <body>
                            <h1 class="heading"> HEADER-TEMPLE </h1>
                        </body>
                    `;
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

};



module.exports = Tools;



