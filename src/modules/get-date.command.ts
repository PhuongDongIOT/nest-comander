import { Command, CommandRunner, Option } from 'nest-commander'
import { logger } from '@/utils/logger'


interface GetDateOptions {
    time?: boolean
}

@Command({ name: 'get-date', description: 'Prints the date' })
export class GetDateCommand extends CommandRunner {
    parseDate(date?: string) {
        if (date) {
            return new Date(date)
        }
        return new Date()
    }

    formatDate(parsedDate: Date, shouldIncludeTime: boolean) {
        if (shouldIncludeTime) {
            return `${parsedDate.toLocaleDateString()} ${parsedDate.toLocaleTimeString()}`
        }
        return parsedDate.toLocaleDateString()
    }

    async run(parameters: string[], options: GetDateOptions) {
        const parsedDate = this.parseDate(parameters[0])
        const formattedDate = this.formatDate(parsedDate, options.time)
        logger.info(formattedDate)
    }

    @Option({
        flags: '-t, --time',
        description: 'Means that the output should include time',
    })
    parseTimeOption() { }
}
