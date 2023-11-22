export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    let text = `=======================================\r\n             Tabla del ${base}\r\n=======================================\r\n`;

    for (let i = 1; i <= limit; i++) {
      text += `${base} x ${i} = ${base * i}\r\n`;
    }

    return text;
  }
}
