<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'default page'
    }
  },
  mounted () {
    this.$nextTick(async () => {
      this.liff = window.liff
      const liffId = '1553887502-4Dop0qr8'
      // const path = this.$route.path
      // if (path && path !== '/') {
      //   localStorage.setItem('redirectPath', String(path))
      // }
      console.log(this.$route.fullPath)
      alert(this.$route.fullPath)
      await this.liff.init({ liffId }, async () => {
        try {
          console.log('isLoggedIn', this.liff.isLoggedIn())
          console.log(this.$route.fullPath)
          alert(String(this.liff.isLoggedIn()))
          alert(this.$route.fullPath)

          if (!this.liff.isLoggedIn()) {
            this.liff.login({ redirectUri: `https://demo-nuxt-liff2.herokuapp.com/` })
          } else {
            const profile = await this.liff.getProfile()
            this.$store.commit('updateProfile', profile)
            alert('login success')
            // const redirectPath = localStorage.getItem('redirectPath')
            // if (redirectPath) {
            //   this.$router.push({ path: redirectPath })
            //   localStorage.removeItem('redirectPath')
            // }
          }
        } catch (e) {
          console.log(e)
        }
      })
    })
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
