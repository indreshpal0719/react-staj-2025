// NavLinkT.tsx
import type { PropsWithChildren } from "react";
import { NavLink, type NavLinkProps } from "react-router";

export const NavLinkT = ({
  children,
  ...rest
}: PropsWithChildren<NavLinkProps>) => {
  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    // Firefox gibi tarayıcılarda henüz desteklenmiyor
    if (!document.startViewTransition) return;

    // Tıkladığımızda anında sayfa geçişi yapmasın diye prevent ediyoruz
    e.preventDefault();
    // Gidilecek sayfanın linkini alıyoruz
    const href = (e.currentTarget as HTMLAnchorElement).href;

    // !!! ASIL OLAY BURADA !!!
    document.startViewTransition(() => {
      // Ileri geri butonları çalışsın diye history state'e link eklenir
      window.history.pushState({}, "", href);
      // TODO: Bakcaz animasyon geçişi ile ilgili olabilir
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
  };

  return (
    // Normal Navlink sadece onClick ekledik
    <NavLink {...rest} onClick={handleClick}>
      {children}
    </NavLink>
  );
};
