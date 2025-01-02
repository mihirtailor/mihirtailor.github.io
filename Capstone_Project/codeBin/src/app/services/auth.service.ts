import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  fetchSignInMethodsForEmail,
  User,
} from 'firebase/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid?: string;
  isLoggedIn: boolean = false;
  currentUser: User | null = null;

  constructor(private router: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        this.isLoggedIn = true;
        console.log('user logged in as:  ', user.email);
      } else {
        this.uid = undefined;
        this.isLoggedIn = false;
        console.log('user logged out');
      }
    });
  }

  registerUser(email: string, password: string): Promise<any> {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          throw 'This email is already registered';
        }
        throw error.message;
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert('please provide a valid email and password');
      });
  }

  logOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        alert('something went wrong while logout');
      });
  }

  checkEmailExists(email: string): Observable<boolean> {
    const auth = getAuth();
    return from(
      fetchSignInMethodsForEmail(auth, email)
        .then((methods) => methods.length > 0)
        .catch(() => false)
    );
  }

  isAuthenticated(): boolean {
    const auth = getAuth();
    return !!auth.currentUser;
  }

  getCurrentUser(): User | null {
    const auth = getAuth();
    return auth.currentUser;
  }

  getUid(): string | undefined {
    return this.uid;
  }
}
