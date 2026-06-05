import { mockChat } from '@/entities/chat/api/mocks';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return Response.json({
    success: true,
    errors: '',
    data: mockChat(id),
  });
}
