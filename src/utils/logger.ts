import chalk = require('chalk')
const log = console.log

export interface ILogItem {
    status: any
    message: string
}

export class Log {
    private static $list: Array<ILogItem> = []

    private push(status: any, message: string) {
        Log.$list.push({
            status: status,
            message: message
        })
    }

    private status(status: any | string): string {
        return chalk.white(`[${status}] -`)
    }

    private storeAndLog(status, message) {
        this.push(status, message)
        log(status, message)
    }

    public static clean() {
        this.$list = []
    }

    public static emptyline() {
        log('')
    }

    public clean() {
        Log.clean()
    }

    public fail(message: any): Log {
        let status = this.status(chalk.red('ERROR'))
        this.storeAndLog(status, message)
        return this
    }

    public error(message: any): Log {
        let status = this.status(chalk.red('ERROR'))
        this.storeAndLog(status, message)
        return this
    }

    public emptyline() {
        Log.emptyline()
    }

    public info(message: any): Log {
        let status = this.status(chalk.cyan('INFO'))
        this.storeAndLog(status, message)
        return this
    }

    public log(message: any): Log {
        let status = this.status(chalk.gray('LOG'))
        this.storeAndLog(status, message)
        return this
    }

    public pass(message: any): Log {
        let status = this.status(chalk.green('PASS'))
        this.storeAndLog(status, message)
        return this
    }

    public ok(message: any): Log {
        let status = this.status(chalk.green('OK'))
        this.storeAndLog(status, message)
        return this
    }

    public success(message: any): Log {
        let status = this.status(chalk.green('SUCCESS'))
        this.storeAndLog(status, message)
        return this
    }

    public toString(): string {
        return JSON.stringify(Log.$list)
    }

    public trace(message: any): Log {
        let status = this.status(chalk.bgYellow.black('TRACE'))
        this.storeAndLog(status, message)
        return this
    }

    public warn(message: any): Log {
        let status = this.status(chalk.yellow('WARN'))
        this.storeAndLog(status, message)
        return this
    }
}

export var logger = new Log

process.on('uncaughtException', (stderr) => {
    logger.error('uncaughtException')
    logger.trace(stderr)
})