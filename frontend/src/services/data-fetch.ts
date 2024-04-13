async function loginUser(email: string, password: string, role: string){
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password, role }),
        });

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getAllDoctors() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/list`);

    if (!res.ok) {
        // This will activate the closest error.js Error Boundary
        throw new Error(res.statusText)
    }

    return res.json() as Promise<{
        doctor_id: string,
        doctor_name: string,
    }[]>;
}

export { loginUser, getAllDoctors };