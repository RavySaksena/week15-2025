import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const mahasiswa = await prisma.mahasiswa.findMany();

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Daftar Mahasiswa</h1>
      <ul>
        {mahasiswa.map((mhs) => (
          <li key={mhs.id} style={{ marginBottom: "10px" }}>
            <strong>{mhs.nama}</strong> - {mhs.nim}
          </li>
        ))}
      </ul>
    </div>
  );
}