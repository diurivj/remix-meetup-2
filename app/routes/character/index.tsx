import { LoaderFunction, Outlet, redirect } from 'remix'

export const loader: LoaderFunction = () => {
  return redirect('/')
}

export default function Index() {
  return <Outlet />
}
