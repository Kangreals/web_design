from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    description = request.form.get('description')

    with open('kritik.txt', 'a', encoding='utf-8') as f:
        f.write(f'Name: {name}\nKritik: {description}\n---\n')
    return "Terimakasih Telah Mengritik."

if __name__ == '__main__':
    app.run(debug=True)