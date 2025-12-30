import NextLink from 'next/link';

function Link({ href, children, ...props }) {
    return (
        <NextLink href={href}>
            <div {...props}>
                {children}
            </div>
        </NextLink>
    );
}

export default Link;