import Image from 'next/image';
import { CustomLink } from '@/shared/ui';

const AppHeader = () => {
  return (
    <nav className="fixed inset-x-0 flex h-14 items-center justify-between bg-white px-6 border border-slate-200">
      <CustomLink href="">
        <div className="flex items-center gap-6">
          <Image src="kinnect-logo.svg" width={32} height={32} alt="logo" />
          <h1 className="text-xl font-semibold leading-8 text-slate-950">Kinnect</h1>
        </div>
      </CustomLink>
    </nav>
  );
};

export default AppHeader;
