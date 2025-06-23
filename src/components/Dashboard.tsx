import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../api'; // ✅ replace axios with your configured instance

// Styled Components
const Wrapper = styled.div`
  min-height: 100vh;
  background: #f5f7fa;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #333;
`;

const NewNoteArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: vertical;
`;

const Button = styled.button`
  background: #4a90e2;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover { background: #357ab8; }
`;

const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const NoteCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const NoteHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Timestamp = styled.span`
  color: #666;
  font-size: 0.875rem;
`;

const Content = styled.p`
  margin: 0.75rem 0;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #4a90e2;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover { text-decoration: underline; }
`;

export interface Note {
  _id: string;
  content: string;
  createdAt: string;
}

export default function Dashboard() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await api.get<Note[]>('/api/notes');
      setNotes(res.data);
    } catch (err) {
      console.error('Failed to fetch notes', err);
    }
  };

  const handleCreate = async () => {
    if (!newNote.trim()) return;
    const payload = { content: newNote.trim() };
    try {
      const res = await api.post<Note>('/api/notes', payload);
      setNotes([res.data, ...notes]);
      setNewNote('');
    } catch (err) {
      console.error('Create note failed', err);
    }
  };

  const handleDelete = async (_id: string) => {
    try {
      await api.delete(`/api/notes/${_id}`);
      setNotes(notes.filter(n => n._id !== _id));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  const handleUpdate = async (_id: string, updatedContent: string) => {
    try {
      const res = await api.put<Note>(`/api/notes/${_id}`, { content: updatedContent });
      setNotes(notes.map(n => (n._id === _id ? res.data : n)));
    } catch (err) {
      console.error('Update failed', err);
    }
  };

  const handleDownload = (note: Note) => {
    const blob = new Blob([note.content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `note-${note._id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Your Notes</Title>
        </Header>

        <NewNoteArea
          placeholder="Write a new note..."
          value={newNote}
          onChange={e => setNewNote(e.target.value)}
        />
        <Button onClick={handleCreate}>Save Note</Button>

        <NotesGrid>
          {notes.map(note => (
            <NoteCard key={note._id}>
              <NoteHeader>
                <Timestamp>{new Date(note.createdAt).toLocaleString()}</Timestamp>
                <ActionGroup>
                  <ActionButton onClick={() => handleDelete(note._id)}>Delete</ActionButton>
                  <ActionButton onClick={() => handleDownload(note)}>Download</ActionButton>
                  <ActionButton onClick={() => {
                    const newContent = prompt('Edit note:', note.content);
                    if (newContent !== null) handleUpdate(note._id, newContent);
                  }}>Edit</ActionButton>
                </ActionGroup>
              </NoteHeader>
              <Content>{note.content}</Content>
            </NoteCard>
          ))}
        </NotesGrid>
      </Container>
    </Wrapper>
  );
}
