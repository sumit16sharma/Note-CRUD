import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateNoteDto } from './createnote.dto';
import { Note } from './note.entity';
import { NotesService } from './note.service';

@Controller('note')
export class NoteController {
    constructor(private notesService: NotesService) {}

    @Get()
    findAll() {
    return this.notesService.getNotes();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.notesService.findOne(id);
  }

  @UsePipes(ValidationPipe)
  @Post() create(@Body() note: CreateNoteDto) {
    return this.notesService.createNote(note);
  }

  @Patch(':id')
  async editNote(@Body() note: Note, @Param('id') id: number): Promise<Note> {
    const noteEdited = await this.notesService.editNote(id, note);
    return noteEdited;
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.notesService.remove(id);
  }
}
