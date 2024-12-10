'use client';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

const liStyle =
  'text-lg cursor-pointer text-gray-100 h-[56px] leading-[48px] border-l-2 border-gray-600 pl-[38px] hover:text-gray';
const menus = [
  {
    name: 'Learn',
    link: '',
    type: 'normal',
  },
  {
    name: 'Build',
    link: 'build',
    type: 'normal',
  },
  {
    name: 'Achievements',
    link: 'achievements',
    type: 'normal', // 'beta',
  },
  {
    name: 'Skill insight',
    link: 'skill-insight',
    type: 'normal',
  },
  {
    name: 'SkillHub',
    link: 'hire',
    type: 'normal',
  },
];
const tagStyles = 'text-xs px-1 py-[2px] rounded-sm text-gray ml-1';
export function DashboardNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="sticky top-[120px] mt-[60px] h-[280px] w-[300px] 2xl:w-[350px]">
      <ul className="">
        {menus.map((i, k) => (
          <li
            onClick={() => {
              if (i.type === 'normal') {
                router.push(`/dashboard/${i.link}`);
              }
            }}
            className={clsx(liStyle, {
              '!border-gray font-bold !text-gray': pathname?.split('/')[2]
                ? pathname?.split('/')[2] === i.link
                : k === 0,
            })}
            key={`profile-nav-${i.name}`}
          >
            {i.name}
            {i.type !== 'normal' && (
              <span
                className={
                  i.type === 'beta'
                    ? `${tagStyles} bg-gray-600`
                    : `${tagStyles} bg-yellow`
                }
              >
                {i.type}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}